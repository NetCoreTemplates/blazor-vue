[assembly: HostingStartup(typeof(MyApp.ConfigureUi))]

namespace MyApp;

public class ConfigureUi : IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureAppHost(appHost => {
            //RazorPage.Config = new() {
            //    ForbiddenPartial = "~/Pages/Shared/Forbidden.cshtml", //Optional. render error in page instead
            //};
            
            //Allow Referencing in #Script expressions, e.g. [Input(EvalAllowableEntries)]
            appHost.ScriptContext.Args[nameof(AppData)] = AppData.Instance;
        });
}

// Shared App Data
public class AppData
{
    internal static readonly AppData Instance = new();
}
