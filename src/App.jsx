import { useState } from "react";
import "./App.css";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("successful submission");
  };
  return (
    <div>
      <Card style={{ maxWidth: 450, margin: "o auto", padding: "20px 5px" }}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            CONTACT US
          </Typography>
          <Typography
            gutterBottom
            color="textSecondary"
            variant="body"
            component="p"
          >
            Fill up the form and our team will get back to you within 24 hours
          </Typography>
          <form method="post" onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  type="text"
                  label="First Name"
                  placeholder="Enter first name"
                  variant="outlined"
                  id=""
                  onChange={handleChange}
                  value={data.name}
                  name={"name"}
                  fullWidth
                  required
                ></TextField>
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  type="text"
                  label="Last Name"
                  placeholder="Enter last name"
                  variant="outlined"
                  id=""
                  onChange={handleChange}
                  value={data.name}
                  name={"name"}
                  fullWidth
                  required
                ></TextField>
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="email"
                  onChange={handleChange}
                  value={data.email}
                  name={"email"}
                  label="Email"
                  placeholder="Enter email"
                  variant="outlined"
                  id=""
                  fullWidth
                  required
                ></TextField>
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="text"
                  label="subject"
                  placeholder="Enter subject"
                  variant="outlined"
                  id=""
                  onChange={handleChange}
                  value={data.subject}
                  name={"subject"}
                  fullWidth
                  required
                ></TextField>
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  placeholder="Type your message here"
                  variant="outlined"
                  id=""
                  onChange={handleChange}
                  value={data.message}
                  name={"message"}
                  fullWidth
                  required
                ></TextField>
              </Grid>
              <Grid xs={12} item>
                <Button
                  type="submit"
                  variant="contained"
                  id=""
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
