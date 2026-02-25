using Microsoft.EntityFrameworkCore;
using GpsCoordinatesApi.Data;

var builder = WebApplication.CreateBuilder(args);

// 🔹 Add services
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

// 🔹 Swagger
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// 🔹 GET all coordinates (ordered)
app.MapGet("/api/coordinates", async (AppDbContext db) =>
{
    var coordinates = await db.Coordinates
        .OrderBy(c => c.OrderIndex)
        .ToListAsync();

    return Results.Ok(coordinates);
});

app.Run();