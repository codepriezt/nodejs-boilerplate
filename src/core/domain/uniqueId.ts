import utilsClass from "../../utility/utils-class";
import { Identifier} from './identifier'
import { v4 as uuidv4, validate as uuidValidate, version as uuidVersion} from 'uuid'


export class UniqueEntityID extends Identifier<string | number>{
       constructor(id?: string| number) {
              super(id ? id : uuidv4())
  }

   toValidate(id: string):boolean{
          return uuidValidate(id) && uuidVersion(id) === 4
  }
}