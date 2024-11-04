"use client";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import styled from "styled-components";

const Wrapper = styled.div`
  .form-input {
    border-bottom: 2px solid white;
    font-family: "Neue Montreal", Helvetica, sans-serif;
    font-weight: 700;
    font-size: 18px;
    background: transparent;
    width: 100%;
    margin-top: 24px;
  }
`;

const Title = styled.h2`
  font-size: clamp(60px, 11.8055555556vw, 170px);
  font-weight: 700;
  font-family: "Neue Montreal", Helvetica, sans-serif;
`;

export default function Contact() {
  return (
    <Wrapper>
      <div className="grid">
        <div className="row">
          <Title>CONTACT</Title>
        </div>
        <div className="row">
          <div className="grid-cols-4">
            <Input className="form-input" placeholder="FIRST NAME" />
            <Input className="form-input" placeholder="FIRST NAME" />
            <div className="grid-cols-4">
              <Input className="form-input" placeholder="FIRST NAME" />
              <Input className="form-input" placeholder="FIRST NAME" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
