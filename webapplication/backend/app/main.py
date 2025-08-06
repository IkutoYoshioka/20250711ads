from fastapi import FastAPI

app = FastAPI()

Employees = [
    {"id": 1, "name": "Alice", "position": "Developer"},
    {"id": 2, "name": "Bob", "position": "Designer"},
    {"id": 3, "name": "Charlie", "position": "Manager"},
    {"id": 4, "name": "David", "position": "HR"},
    {"id": 5, "name": "Eve", "position": "Sales"},
]

@app.get("/employee")
async def root():
    return Employees

@app.get("/employee/{employee_id}")
async def get_employee(employee_id: int):
    return {'employee_id': employee_id, 'name': Employees[employee_id - 1]['name'], 'position': Employees[employee_id - 1]['position']}

@app.get("/employee/{employee_id}/")
async def get_employee_details(employee_id: int, name: str):
    employee = []
    for emp in Employees:
        if emp['id'] == employee_id and emp['name'].casefold() == name.casefold():
            employee.append(emp)
    return employee

@app.post("/employee/")
async def create_employee(name: str, position: str):
    new_id = len(Employees) + 1
    new_employee = {"id": new_id, "name": name, "position": position}
    Employees.append(new_employee)
    return new_employee