export const requestPoll = (req: any, res: any, next: any) => {
  if (!req.body || !req.body.name || !req.body.type_ins || !req.body.type_topup || !req.body.type_fixed || !req.body.type_year || !req.body.type_fix || !req.body.range_sum_insure || !req.body.range_premiums_insure) {
    req.validatedIsPassed = {
      success: false,
      message: "ต้องกรอกข้อมูลให้ครบถ้วน",
    };
    res.status(400).send(req.validatedIsPassed);
  } else {
    next();
  }
};
