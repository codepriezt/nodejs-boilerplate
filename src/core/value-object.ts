import utilsClass from "../utility/utils-class";
interface Iidentifer{
    identifier?: string
}
export default abstract class ValueObject<T extends Object> {
    private readonly props: T & Iidentifer;
    private readonly identifier: string;
    constructor(properties: T) {
        this.identifier = "id" + utilsClass.randomString(10)
        let props = { ...{ identifier: this.identifier }, ...Object.freeze(properties)}
        this.props = props
    }

    get identity(){
        return this.identifier;
    }

    get properties(): T{
        let toReturnProps = {...this.props};
        delete toReturnProps.identifier
        return toReturnProps;
    }

    public equals<X extends Object>(vo: ValueObject<X> ): boolean {
        return this.identity === vo.identity
    }
}