
//const { default: Contact } = require("../Contactus")
import Contact from "../Contactus";
import { screen,render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact us page Test cases",()=>{

    it("should load contact us page",()=>{

        render(<Contact/>);
    
        const button=screen.getByText("submit");
    
        expect(button).toBeInTheDocument();
        
    });
    
    test("should load input name insde contact components",()=>{
    
        render(<Contact/>);
    
        const inputname=screen.getByPlaceholderText("password");
    
        expect(inputname).toBeInTheDocument();
        
    });
    
    test("should load 2 input boxes on the contact components",()=>{
    
        render(<Contact/>);
    
        const inputboxes=screen.getAllByRole("textbox");
    
        console.log(inputboxes.length); 
    
        expect(inputboxes.length).toBe(2);
        
    });


});

