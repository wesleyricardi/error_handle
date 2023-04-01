import { Err, Ok, Result } from "./error_handler";

function sendEmail(email: string): Result<boolean, string> {
  if (!email) return Err("Email cannot be empty");

  //send email code

  return Ok(true);
}

function exemple(email: string): Result<string, string> {
  const { error, success_or_throw } = sendEmail(email);

  if (error) return Err(error);
  const success = success_or_throw;

  console.log(success);

  return Ok("success");
}

function exemple2(email: string): string {
  const { error, success_or_throw } = sendEmail(email);

  if (error) throw new Error(error);
  const success = success_or_throw;

  console.log(success);

  return "success";
}
