import React from "react";
import { Container } from "@mui/material";
import SupportComponent from "../components/supportResources/Support";
import Tickets from "../components/tickets/Tickets";

function Support() {
  return (
    <Container maxWidth="md">
      <SupportComponent />
      <Tickets/>
    </Container>
  );
}

export default Support;
