using Microsoft.Extensions.Diagnostics.HealthChecks;

[assembly: HostingStartup(typeof(MyApp.ConfigureHealthCheck))]

namespace MyApp;

public class ConfigureHealthCheck : IHostingStartup
{
    public void Configure(IWebHostBuilder builder)
    {
        builder.ConfigureServices(services =>
        {
            services.AddHealthChecks()
                .AddCheck<HealthCheck>("HealthCheck");
        });
    }
}

public class HealthCheck : IHealthCheck
{
    public async Task<HealthCheckResult> CheckHealthAsync(HealthCheckContext context, CancellationToken cancellationToken = default)
    {
        // Perform health check logic here
        return HealthCheckResult.Healthy();
    }
}