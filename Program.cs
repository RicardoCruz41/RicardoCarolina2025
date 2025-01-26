var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // Enable HSTS for production environments.
    app.UseHsts();
}

// Enable CORS for API calls
app.UseCors(policy =>
{
    policy.AllowAnyOrigin() // Allow requests from any origin
          .AllowAnyHeader()
          .AllowAnyMethod();
});

// Redirect HTTP to HTTPS
app.UseHttpsRedirection();

// Serve static files (e.g., React build files in wwwroot)
app.UseDefaultFiles(); // Look for index.html by default
app.UseStaticFiles();  // Enable serving static files like CSS, JS, etc.

// Enable routing
app.UseRouting();

// Configure routes for API controllers
app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

// Fallback to index.html for React routes
app.MapFallbackToFile("index.html");

app.Run();