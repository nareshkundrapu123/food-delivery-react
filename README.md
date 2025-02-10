#food ordering
/**
 * Header
 * -logo
 * -nav items
 * Body
 * -Search 
 * -RestaurantContainer
 *  -RestaurantCard
 *      -Image
 *      -Name of res,Star rating,cusines, 
 * Footer
 * -copyright
 * -Links
 * -Address
 * -Contact
 * 
 */

 Two types of Export/Import
 
 -Default Export/Import

 export defaultname of variable or component;
 import component from "path";

-Named Export/Importv

export const Component;
import {component} from "path"

-react router dom error-

follow this steps 

PS C:\Users\91949\Desktop\Courses\frontend\React js\fooddelivery> Remove-Item -Recurse -Force node_modules
PS C:\Users\91949\Desktop\Courses\frontend\React js\fooddelivery> Remove-Item -Force package-lock.json    
PS C:\Users\91949\Desktop\Courses\frontend\React js\fooddelivery> Remove-Item -Recurse -Force .parcel-cache     
PS C:\Users\91949\Desktop\Courses\frontend\React js\fooddelivery> npm update

added 166 packages, and audited 167 packages in 23s

85 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\Users\91949\Desktop\Courses\frontend\React js\fooddelivery> npx parcel clean
Server running at http://localhost:1234
🚨 Build failed.

unknown: Entry C:\Users\91949\Desktop\Courses\frontend\React js\fooddelivery\clean does not exist
PS C:\Users\91949\Desktop\Courses\frontend\React js\fooddelivery> npm clean
Unknown command: "clean"

To see a list of supported npm commands, run:
  npm help
PS C:\Users\91949\Desktop\Courses\frontend\React js\fooddelivery> npm parcel clean
Unknown command: "parcel"

To see a list of supported npm commands, run:
  npm help
PS C:\Users\91949\Desktop\Courses\frontend\React js\fooddelivery> npm clean       
Unknown command: "clean"

To see a list of supported npm commands, run:
  npm help
PS C:\Users\91949\Desktop\Courses\frontend\React js\fooddelivery> npx parcel clean
Server running at http://localhost:1234                                                                                                   
🚨 Build failed.

unknown: Entry C:\Users\91949\Desktop\Courses\frontend\React js\fooddelivery\clean does not exist
PS C:\Users\91949\Desktop\Courses\frontend\React js\fooddelivery> npm run start

> fooddelivery@1.0.0 start
> parcel index.html

Server running at http://localhost:1234
✨ Built in 84ms