using MyApp.Data;
using ServiceStack.Configuration;
using ServiceStack.Data;
using ServiceStack.OrmLite;

[assembly: HostingStartup(typeof(MyApp.ConfigureApiKeys))]

namespace MyApp;

public class ConfigureApiKeys : IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices(services =>
        {
            services.AddPlugin(new ApiKeysFeature
            {
                Features = [
                    "Tracking"
                ],
                
                // Optional: Limit scope of API Key access
                UserScopes = [
                    "todo:read",
                    "todo:write",
                ],
                // Optional: Tag API Keys with additional features
                UserFeatures = [
                    "Tracking",
                ],
            });
        })
        .ConfigureAppHost(appHost =>
        {
            var apiKeysFeature = appHost.GetPlugin<ApiKeysFeature>();
            using var db = appHost.Resolve<IDbConnectionFactory>().Open();
            apiKeysFeature.InitSchema(db);
            
            // Optional, create API Key for specified Users
            if (apiKeysFeature.ApiKeyCount(db) == 0)
            {
                var createApiKeysFor = new [] { "admin@email.com", "manager@email.com" };
                var users = db.Select<ApplicationUser>(x => createApiKeysFor.Contains(x.UserName));
                foreach (var user in users)
                {
                    List<string> scopes = user.UserName == "admin@email.com"
                        ? [RoleNames.Admin] 
                        : [];
                    apiKeysFeature.Insert(db, 
                        new() { Name = "Seed API Key", UserId = user.Id, UserName = user.UserName, Scopes = scopes });
                }
            }
        });
}