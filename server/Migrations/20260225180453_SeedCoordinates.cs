using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace GpsCoordinatesApi.Migrations
{
    /// <inheritdoc />
    public partial class SeedCoordinates : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Coordinates",
                columns: new[] { "Id", "Description", "Latitude", "Longitude", "Name", "OrderIndex" },
                values: new object[,]
                {
                    { 1, null, 47.497900000000001, 19.040199999999999, "Start Budapest", 1 },
                    { 2, null, 47.4985, 19.042000000000002, "Point 2", 2 },
                    { 3, null, 47.5, 19.045000000000002, "Point 3", 3 },
                    { 4, null, 47.500999999999998, 19.047999999999998, "Point 4", 4 },
                    { 5, null, 47.502000000000002, 19.050000000000001, "Point 5", 5 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Coordinates",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Coordinates",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Coordinates",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Coordinates",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Coordinates",
                keyColumn: "Id",
                keyValue: 5);
        }
    }
}
