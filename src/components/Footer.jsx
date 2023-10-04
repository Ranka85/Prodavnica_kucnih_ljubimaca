import React from "react";

import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

export const Footer = () => {
  return (
    <Box>
      <h1
        style={{ color: "green", textAlign: "center", marginTop: "-50px" }}
      ></h1>
      <Container>
        <Row>
          <div className="abt-use-div">
            <Column>
              <Heading>About Us</Heading>
              <FooterLink href="/whoarewe">Who Are We?</FooterLink>
            </Column>

            <Column>
              <Heading>Useful Links</Heading>

              <FooterLink href="/postnewad">Post New Ad</FooterLink>
              <FooterLink href="/register">Register</FooterLink>
              <FooterLink href="/login">Login</FooterLink>
            </Column>
          </div>
          <div className="help-cntc">
            <Column>
              <Heading>Social Media</Heading>
              <FooterLink href="#">Instagram</FooterLink>
              {/* <i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i> */}

              <FooterLink href="#">Facebook</FooterLink>
              {/* <i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i> */}
            </Column>
            <Column>
              <Heading>Help</Heading>
              <FooterLink href="/whoarewe">Contact Us</FooterLink>
            </Column>
          </div>
        </Row>
      </Container>
    </Box>
  );
};
