import { Provider } from "react-redux"
import Header from "../Header"
import appStore from "../../utils/Appstore"
import { BrowserRouter } from "react-router-dom"
import { fireEvent, render } from "@testing-library/react"
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("should render header components with a login button",()=>{
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );

      const login=screen.getByText(/Cart/);

      expect(login).toBeInTheDocument();

});


it("should change to login button to logout button", ()=>{
  render(
  <BrowserRouter>
  <Provider store={appStore}>
  <Header/>
  </Provider>
  </BrowserRouter>
  );

    const loginbutton=screen.getByRole("button",{name:"login"});

    fireEvent.click(loginbutton);

    const logoutbutton =screen.getByRole("button",{name:"logout"})

    expect(logoutbutton).toBeInTheDocument();

});