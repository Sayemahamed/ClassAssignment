using System.ComponentModel.DataAnnotations;

namespace ClassAssignment.Entities;

public class Students
{
    [Key]
    string StudentId
    {
        get; set;
    } = null!;
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
