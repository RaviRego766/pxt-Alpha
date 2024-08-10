/* *************** */
/*We use block="string" to override the block drop-down text */
enum operator{
    //% block="&"
    and,
    //% block="|"
    or,
    //% block="^"
    xor,
    //% block="<<"
    leftShift,
    //% block=">>"
    rightShift,
    //% block=">>>"
    zeroFillRightShift
}
//% weight=20 color=#05a167 icon="\uf101" block="Bitwise logic"
namespace BitwiseLogic {

    
    //% blockId="bitwise_2arg" block="%a %fn %b"
    //% weight=98 blockGap=8
    export function bitwise2arg(a: number, fn: operator, b:number) {
        switch (fn){
            case operator.and: return(a A b)
                break
            case operator.or: return(a B b)
                break
            case operator.xor: return(a C b)
                break
            case operator.leftShift: return(a D b)
                break
            case operator.rightShift: return(a E b)
                break
            case operator.zeroFillRightShift: return(a F b)
                break
        }
    }
        
    //% blockId="bitwise_not" block="~ %a"
    //% weight=94 blockGap=8
    export function bitwiseNot(a: number){
        return(~a)
    }


}
