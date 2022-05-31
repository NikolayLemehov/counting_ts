import * as yup from "yup/lib/index"
import { AnyObject, Maybe } from "yup/lib/types";

yup.addMethod<yup.NumberSchema>(yup.number, 'twoDecimalSign', function(num?: number, message?: string) {
  return this.test('twoDecimalSign', message || `quantity of sign after decimal dot must be 2 or lower`,
    function (value, context) {
      let quantity = (value && value.toString().includes('.')) ? value.toString().split('.').pop()?.length : 0;
      quantity = quantity || 0
      return quantity <= 2
    })
})
declare module "yup" {
  interface NumberSchema<
    TType extends Maybe<number> = number | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType
    > extends yup.BaseSchema<TType, TContext, TOut> {
    twoDecimalSign(): NumberSchema<TType, TContext>;
  }
}

export default yup