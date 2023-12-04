import { FormEvent, useState, useRef } from "react";
import styled from "styled-components";
import axios from "axios";

const FormSC = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 1rem;
  width: 50%;

  label {
    margin-top: 1rem;
  }
  button {
    margin-top: 1rem;
  }
`;

const formFields = [
  {
    company: "Company",
    firstName: "First name",
    lastName: "Last name",
    street: "Street",
    city: "City",
    postalCode: "Postal Code",
    province: "Province",
    country: "Country",
    requestorFirstName: "Requestor's first name",
    phone: "Phone",
    email: "Email",
  },
];

function Form() {
  const [form, setForm] = useState<string>();
  const categoryRef = useRef<HTMLSelectElement>(null);
  const wFNameRef = useRef<HTMLInputElement>(null);
  const wLNameRef = useRef<HTMLInputElement>(null);
  const wStreetRef = useRef<HTMLInputElement>(null);
  const wCityRef = useRef<HTMLInputElement>(null);
  const wPostalCodeRef = useRef<HTMLInputElement>(null);
  const wProvinceRef = useRef<HTMLInputElement>(null);
  const wCountryRef = useRef<HTMLInputElement>(null);
  const wPhoneRef = useRef<HTMLInputElement>(null);
  const wEmailRef = useRef<HTMLInputElement>(null);
  // DEALERSHIPS REF
  const dFNameRef = useRef<HTMLInputElement>(null);
  const dLNameRef = useRef<HTMLInputElement>(null);
  const dCompanyRef = useRef<HTMLInputElement>(null);
  const dStreetRef = useRef<HTMLInputElement>(null);
  const dCityRef = useRef<HTMLInputElement>(null);
  const dPostalCodeRef = useRef<HTMLInputElement>(null);
  const dProvinceRef = useRef<HTMLInputElement>(null);
  const dCountryRef = useRef<HTMLInputElement>(null);
  const dPhoneRef = useRef<HTMLInputElement>(null);
  const dEmailRef = useRef<HTMLInputElement>(null);
  const handleChange = (event: FormEvent) => {
    setForm((event.target as HTMLSelectElement).value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (categoryRef.current?.value === "Walk-in") {
      axios
        .post("http://localhost:3000/add-profile", {
          category: categoryRef.current?.value,
          company: "Walk-in",
          first_name: wFNameRef.current?.value,
          last_name: wLNameRef.current?.value,
          street: wStreetRef.current?.value,
          city: wCityRef.current?.value,
          postal_code: wPostalCodeRef.current?.value,
          province: wProvinceRef.current?.value,
          country: wCountryRef.current?.value,
          phone: wPhoneRef.current?.value,
          email: wEmailRef.current?.value,
        })
        // id,
        //   category,
        //   company,
        //   first_name,
        //   last_name,
        //   street,
        //   city,
        //   postal_code,
        //   province,
        //   country,
        //   phone,
        //   email,
        //   created_on
        .then(() => console.log("Posted!"))
        .catch((err) => console.log(err));
      console.log("You're in Walk-in!");
    } else if (categoryRef.current?.value === "Dealership") {
      console.log("You're in Dealership!");
      console.log(categoryRef.current?.value);
      console.log(dFNameRef.current?.value);
      console.log(dLNameRef.current?.value);
      console.log(dStreetRef.current?.value);
      console.log(dCityRef.current?.value);
      console.log(dPostalCodeRef.current?.value);
      console.log(dProvinceRef.current?.value);
      console.log(dCountryRef.current?.value);
      console.log(dPhoneRef.current?.value);
      console.log(dEmailRef.current?.value);
    }
  };

  return (
    <>
      <FormSC action="POST" onSubmit={handleSubmit}>
        <h1>CRUD FORM</h1>
        <label htmlFor="name">Category</label>
        <select ref={categoryRef} id="category" onChange={handleChange}>
          <option>Choose an option</option>
          <option value="Dealership">Dealership</option>
          <option value="Walk-in">Walk in</option>
        </select>
        {form === "Walk-in" &&
          formFields.map((field) => (
            <>
              <label htmlFor="">Name</label>
              <input
                ref={wFNameRef}
                type="text"
                placeholder={field.firstName}
              />
              <input ref={wLNameRef} type="text" placeholder={field.lastName} />

              <label htmlFor="">Address</label>
              <input ref={wStreetRef} type="text" placeholder={field.street} />
              <input ref={wCityRef} type="text" placeholder={field.city} />
              <input
                ref={wPostalCodeRef}
                type="text"
                placeholder={field.postalCode}
              />
              <input ref={wProvinceRef} type="text" placeholder="Province" />
              <input ref={wCountryRef} type="text" value={"Canada"} disabled />

              <label htmlFor="">Contact</label>
              <input ref={wPhoneRef} type="tel" placeholder="Phone" />
              <input ref={wEmailRef} type="email" placeholder="Email" />
            </>
          ))}
        {form === "Dealership" &&
          formFields.map((field) => (
            <>
              <label htmlFor="">Requestor's info</label>
              <input
                ref={dFNameRef}
                type="text"
                placeholder={field.firstName}
              />
              <input ref={dLNameRef} type="text" placeholder={field.lastName} />
              <input ref={dPhoneRef} type="tel" placeholder="Phone" />
              <input ref={dEmailRef} type="email" placeholder="Email" />

              <label htmlFor="">Company's info</label>
              <input
                ref={dCompanyRef}
                type="text"
                placeholder={field.company}
              />
              <input ref={dStreetRef} type="text" placeholder={field.street} />
              <input ref={dCityRef} type="text" placeholder={field.city} />
              <input
                ref={dPostalCodeRef}
                type="text"
                placeholder={field.postalCode}
              />
              <input ref={dProvinceRef} type="text" placeholder="Province" />
              <input ref={dCountryRef} type="text" value={"Canada"} disabled />
            </>
          ))}
        <button type="submit">Submit</button>
      </FormSC>
    </>
  );
}

// company : "Rally Subaru"
// first_name : "Emily"
// last_name : "Bunch"
// street : "345 Ave"
// city : "Edmonton"
// postal_code : "T6T 2T2"
// province : "AB"
// country : "Canada"
// phone : "734-345-232"
// email : "emily@gmail.com"

export default Form;
