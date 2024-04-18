
using ClassAssignment.DataBaseContext;
using Microsoft.EntityFrameworkCore;

namespace ClassAssignment;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.

        builder.Services.AddControllers();
        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();
        builder.Services.AddDbContext<DatabaseContext>(options =>
        {
            options.UseMySQL(
                builder.Configuration.GetConnectionString("DefaultConnection")
                );
        });
        builder.Services.AddCors(options =>
        {
            options.AddDefaultPolicy(build =>
            {
                build.WithOrigins("*")
                .WithHeaders("Authorization", "origin", "accept", "content-type")
                .WithMethods("GET", "POST", "PUT", "DELETE");
            });
        });

        var app = builder.Build();

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseHttpsRedirection();

        app.UseAuthorization();
        app.UseHsts();
        app.UseCors();
        app.MapControllers();

        app.Run();
    }
}
