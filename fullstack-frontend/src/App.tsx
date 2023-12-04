import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Form from "./components/Form";

type Props = {
  category: string;
  city: string;
  company: string;
  country: string;
  created_on: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  phone: string;
  postal_code: string;
  province: string;
  street: string;
};

const UL = styled.ul`
  width: 50vw;
  border: 1px dashed red;
  display: flex;
  flex-direction: column;
  list-style: none;
`;

const LI = styled.li`
  width: 100%;
`;

const Div = styled.div`
  border: 1px dashed green;
  width: auto;
  height: auto;
`;

function App() {
  const [profiles, setProfiles] = useState<Props[]>([]);
  useEffect(() => {
    axios.get<Props[]>("http://localhost:3000/profiles").then((res) => {
      console.log(res.data);
      setProfiles(res.data);
    });
  }, []);
  return (
    <>
      <UL>
        <Form />
        {true &&
          profiles.map((profile) => (
            <Div>
              <LI>{profile.category}</LI>
              <LI>{profile.company}</LI>
              <LI>
                {profile.first_name} {profile.last_name}
              </LI>
              <LI>
                {profile.street}, {profile.city}
              </LI>
              <LI>
                {profile.postal_code}, {profile.postal_code}, {profile.country}
              </LI>
              <LI>
                {profile.phone}, {profile.email}
              </LI>
              <LI>{profile.created_on.slice(0, 10)}</LI>
            </Div>
          ))}
      </UL>
    </>
  );
}

export default App;
