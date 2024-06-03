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
                // Optional: Limit available Scopes Admin Users can assign to any API Keys
                // Features = [
                //     "Paid",
                //     "Tracking",
                // ],
                // Optional: Limit available Features Admin Users can assign to any API Keys
                // Scopes = [
                //     "todo:read",
                //     "todo:write",
                // ],
                
                // Optional: Limit available Scopes Users can assign to their own API Keys
                // UserScopes = [
                //     "todo:read",
                //     "todo:write",
                // ],
                // Optional: Limit available Features Users can assign to their own API Keys
                // UserFeatures = [
                //     "Paid",
                //     "Tracking",
                // ],
            });
        })
        .ConfigureAppHost(appHost =>
        {
            var apiKeysFeature = appHost.GetPlugin<ApiKeysFeature>();
            using var db = appHost.Resolve<IDbConnectionFactory>().Open();
            apiKeysFeature.InitSchema(db);
            
            // Optional: Create API Key for specified Users on Startup
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