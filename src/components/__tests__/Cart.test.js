import { fireEvent, render,screen } from "@testing-library/react"
import { act } from "react"
import Restaurantmenu from "../Restaurantmenu";
import MOCK_DATA from "../mocks/mockRestMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

global.fetch= jest.fn(()=>
    Promise.resolve({
        json: ()=>Promise.resolve(MOCK_DATA),
    })
);

test("should load restaurant menu component",async()=>{

    await act(async()=> render(
        
        <Provider store={appStore}>
    
    <Restaurantmenu/>
    </Provider>


))

    const accordian=screen.getByText("Dosas(15)")

    fireEvent.click(accordian);

        expect(screen.getAllByTestId("fooditems").length).toBe(13);

        const addBtn =screen.getAllByRole("button",{name:"Add +"});

        console.log(addBtn);

});