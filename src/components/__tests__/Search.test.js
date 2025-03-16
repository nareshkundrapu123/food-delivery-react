import { fireEvent, render,screen } from "@testing-library/react";
import Body from "../Body";
import { data } from "autoprefixer";
import MOCK_DATA from "../mocks/mockDataRestlist.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom"; 
import "@testing-library/jest-dom";


global.fetch=jest.fn(()=>{

    return Promise.resolve({
        json: ()=>{
            return  Promise.resolve(MOCK_DATA); 
        },
    });

});


it("Should render the body components with search", async ()=>{

    await act(async()=>
    render(
        <BrowserRouter>
        <Body/>
        </BrowserRouter>
));


const cardbeforesearch=screen.getAllByTestId("resCard");

expect(cardbeforesearch.length).toBe(16);

// const searchBtn=screen.getByRole("button",{name:"Search"});

// const searchInput=screen.getByTestId("searchInput")

// console.log(searchBtn);
// fireEvent.change(searchInput,{target:{value:"burger"}});

// fireEvent.click(searchBtn);

// const cards=screen.getAllByTestId("resCard");

// expect(cards.length).toBe(2);

});

