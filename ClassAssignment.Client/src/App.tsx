import { useEffect, useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import apiClient from "./apiClient";

interface IStudent {
  studentId: string;
  studentName: string;
  studentPhone: string;
  studentEmail: string;
  department: string;
  semester: number;
}

let App = () => {
  let [students, setStudents] = useState<IStudent[]>([]);
  let [student, setStudent] = useState<IStudent>({
    studentId: "",
    studentName: "",
    studentPhone: "",
    studentEmail: "",
    department: "",
    semester: 0,
  });
  let [deleteId, setDeleteId] = useState<number>();
  useEffect(() => {
    getData();
  }, []);
  let getData = async () => {
    let response = await apiClient.get("api/Students");
    const data = await response.data;
    setStudents(data);
  };
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12}>
        {students.map((item) => (
          <div key={item.studentId}>
            <Button>{item.studentName}</Button>
            <Button>{item.studentPhone}</Button>
            <Button>{item.studentEmail}</Button>
            <Button>{item.semester}</Button>
          </div>
        ))}
      </Grid>
      <Grid item xs={12}>
        <TextField
          size="small"
          label="Student ID"
          variant="outlined"
          onChange={(t) => {
            setStudent({ ...student, studentId: t.target.value });
          }}
        ></TextField>
        <TextField
          size="small"
          label="Student Name"
          variant="outlined"
          onChange={(t) => {
            setStudent({ ...student, studentName: t.target.value });
          }}
        ></TextField>
        <TextField
          size="small"
          label="Department"
          variant="outlined"
          onChange={(t) => {
            setStudent({ ...student, department: t.target.value });
          }}
        ></TextField>
        <TextField
          size="small"
          label="Phone Number"
          variant="outlined"
          onChange={(t) => {
            setStudent({ ...student, studentPhone: t.target.value });
          }}
        ></TextField>
        <TextField
          size="small"
          label="Email"
          variant="outlined"
          onChange={(t) => {
            setStudent({ ...student, studentEmail: t.target.value });
          }}
        ></TextField>
        <TextField
          size="small"
          label="Semester"
          variant="outlined"
          onChange={(t) => {
            setStudent({
              ...student,
              semester: Number.parseInt(t.target.value),
            });
          }}
        ></TextField>
        <Button
          onClick={async () => {
            await apiClient
              .post("api/Students", student)
              .catch((error) => console.log(error));
            await getData();
          }}
        >
          Post Data
        </Button>
      </Grid>
    </Grid>
  );
};

export default App;
