import { Button, Grid, TextField, Typography } from "@mui/material";

const CourseForm = () => {
  return (
    <Grid
      item
      xs={"auto"}
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "75vh" }}>
      <Typography marginLeft={2.4} component="h1" variant="h2">
        Select a course
      </Typography>

      <Grid>
        <TextField
          fullWidth
          placeholder="course"
          name="course_id"
          style={{ marginBottom: "30px" }}
          className="inputfield"
        />
        <TextField
          fullWidth
          placeholder="topic"
          name="topic_id"
          style={{ marginBottom: "30px" }}
          className="inputfield"
        />
      </Grid>
      <Grid item xs={"auto"} style={{ maxWidth: "20vh" }}></Grid>
      <Button
        type="submit"
        variant="contained"
        className="button"
        style={{
          border: "4px solid black",
          minHeight: "5vh",
          minWidth: "5vh",
          marginTop: "17px",
        }}></Button>
    </Grid>
  );
};

export default CourseForm;
