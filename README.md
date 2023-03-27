## ResultHandler Library

The ResultHandler library provides a way to represent the outcome of an operation that can either succeed with a value of type T or fail with an error of type E. It consists of a single class, ResultHandler, and two helper functions, Ok and Err, which can be used to create instances of the ResultHandler class.

## Usage

- Creating a Result object
  To create a Result object representing a successful outcome, use the Ok function an to create a Result object representing a failed outcome, use the Err function:
  Exemplo:
  function sendEmail(email: string): Result<boolean, string> {
  if (!email) return Err("Email cannot be empty");
  return Ok(true);
  }

- To defined the type of the class you can use the Result<T, E> T is defined using Ok() and E is defined using Err()

- Using the function create and handle with error can be used like this:
  function exemple(email: string): Result<string, string> {
  const { error, get_success_or_exit } = sendEmail(email);

  if (error) return Err(error);
  const success = get_success_or_exit();

  console.log(success);

  return Ok("success");
  }

or

function exemple2(email: string): string {
const { error, get_success_or_exit } = sendEmail(email);

if (error) throw new Error(error);
const success = get_success_or_exit();

console.log(success);

return "success";
}

the success and error cant be accessed by destruct const { success, error } = sendEmail(email), but will be possible null for both, to filter you can use the fallow methods below.

## Methods

If for exemple you have const result = sendEmail(email), you can use the fallow methods to filter the error and success

# Successful outcome

- To get the successful outcome value, use the get_success_or_exit method. This method will throw an error if the Result object represents a failed outcome.
  const successValue = result.get_success_or_exit();

- Alternatively, you can use the get_success_or method to return a default value if the Result object represents a failed outcome:
  const successValue = result.get_success_or("default value");

- You can also use the get_success_or_run method to execute a callback function if the Result object represents a failed outcome:
  const successValue = result.get_success_or_run((error) =>
  console.error(`An error occurred: ${error}`)
  );

# Error outcome

- To get the error value, use the get_failure_or_exit method. This method will throw an error if the Result object represents a successful outcome.
  const errorValue = result.get_failure_or_exit();

- Alternatively, you can use the get_failure_or method to return a default value if the Result object represents a successful outcome:
  const errorValue = result.get_failure_or("default value");

- You can also use the get_failure_or_run method to execute a callback function if the Result object represents a successful outcome:
  const errorValue = result.get_failure_or_run((success) =>
  console.log(`The operation succeeded with value: ${success}`)
  );
