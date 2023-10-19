# password-bank
 Securely store passwords locally

## Project Structure
![Project Structure](./img/ProjectStruct.jpg?raw=true "Project Structure")

---

## Data Structure Breakdown

![Data Structure](./img/DataStruct.jpg?raw=true "Data Structure")

![Information Breakdown](./img/InformationBreakdown.JPG?raw=true "Information Breakdown")

---

## API Endpoints

![API Endpoints](./img/ApiEndpoints.JPG?raw=true "API Endpoints")

---

## Security Breakdown

> We assume the SQLite Database is public and the Hacker has full access to the computer.
> <p> If the database was stored in an inaccessible server and a limited number of tries was implemented, such as the secret is destroyed once reaching X consecutive failed tries the passwords would be impossible to crack.


>Valid Key characters <p>
>`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"#$%&'()*+,-./:;<=>?@[\]^_{|}~` (92)<p>
>Minimum Password Length: 6 

> Valid Pin Characters <p>
>`0123456789` (10) -> screen keyboard (anti keylogger measure) <p>
>Minimum Pin Length: 4

![Information Chart](./img/InformationChart.jpg?raw=true "Information Chart")

![Information Breakdown](./img/AES.JPG?raw=true "Information Breakdown")

>Brute Force Raw AES-256 <p>
> 2^256 = 1.1e77 cycles <p>
> With the right quantum computer: 2.29e32 Years

>Brute Force Strength <p>
> Pin Bruteforce Strength * Password bruteforce Strength <p>
> Assuming Minimum strength: <p>
> 10^4 * 92^6 ~= 6e15 Cycles

---

### FAQ

#### Why isn't there password verification / Persona Validation?
> asdas

#### Sql Injections?
> We assume the SQlite Database is public, as such Sql injections are of no concern for the proposes of this project, we do parametrize user input still.

RANDOM NUMBER GEN (seed = key hash)

RANDOM NEURAL NETWORK WEIGHTS