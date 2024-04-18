using System.ComponentModel.DataAnnotations;

namespace ClassAssignment.Entities;

public class Student
{
    [Key]
    [Required]
    public string? StudentId
    {
        get; set;
    }
    public string StudentName
    {
        get; set;
    } = string.Empty;
    public string StudentPhone
    {
        get; set;
    } = string.Empty;
    public string StudentEmail
    {
        get; set;
    } = string.Empty;
    public string Department
    {
        get; set;
    } = string.Empty;
    public int semester
    {
        get; set;
    }
}
