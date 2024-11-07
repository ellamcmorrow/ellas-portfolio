"use client";
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
    <Wrapper className="p-24">
      <div className="grid">
        <div className="row">
          <Title>GET IN TOUCH</Title>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-6">
          <div className="col-span-2">
            <div className="grid grid-cols-2 gap-6">
              <Input className="form-input" placeholder="FIRST NAME" />
              <Input className="form-input" placeholder="LAST NAME" />
              <Input className="form-input" placeholder="EMAIL" />
              <Input className="form-input" placeholder="TITLE" />
              <Input className="form-input" placeholder="COMPANY" />
            </div>
          </div>
          <div className="col-span-1 flex flex-col">
            <div className="mb-6">
              <h5 className="font-bold">NEW BUSINESS</h5>
              <div className="grid-row">
                <strong>Ella McMorrow</strong>
              </div>
              <div className="grid-row">
                <small>2000990009</small>
              </div>
              <div className="grid-row">
                <small>ek@gmail.com</small>
              </div>
            </div>

            <div className="mb-6">
              <h5 className="font-bold">CAREERS</h5>
              <div className="grid-row">
                <strong>Ella McMorrow</strong>
              </div>
              <div className="grid-row">
                <small>2000990009</small>
              </div>
              <div className="grid-row">
                <small>ek@gmail.com</small>
              </div>
            </div>

            <div>
              <h5 className="font-bold">EMAIL</h5>
              <div className="grid-row">
                <strong>Ella McMorrow</strong>
              </div>
              <div className="grid-row">
                <small>2000990009</small>
              </div>
              <div className="grid-row">
                <small>ek@gmail.com</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
