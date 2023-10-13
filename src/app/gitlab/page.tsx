import { Box, Button } from "@mui/material";

export default function GitLab() {
  return (
    <>
      <div className="button-card">
        <h4 className="title">Tracking :</h4>

        <Box
          sx={{
            display: "grid",
            gap: 1,
            gridTemplateColumns: "repeat(2, 1fr)",
            alignItems: "center",
            justifyItems: "center",
            height: "32vh",
            paddingX: 38,
          }}
        >
          <div className="button-div">
            <Button className="m-3 button" variant="outlined">
              Individual
            </Button>
          </div>
          <div className="button-div">
            <Button className="m-3 button" variant="outlined">
              Enterprise
            </Button>
          </div>
        </Box>
      </div>
    </>
  );
}
