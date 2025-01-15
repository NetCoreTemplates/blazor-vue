using ServiceStack;
using ServiceStack.DataAnnotations;

namespace MyApp.ServiceModel;

/// <summary>
/// Public User DTO
/// </summary>
[Icon(Svg = Icons.User)]
[Alias("AspNetUsers")]
public class User
{
    public string Id { get; set; }
    public string UserName { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? DisplayName { get; set; }
    public string? ProfileUrl { get; set; }
}
