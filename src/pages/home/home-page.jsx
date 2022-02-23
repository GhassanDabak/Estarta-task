import React, { useState, useEffect } from "react";
import EmployeeTable from "../../components/employee-table/employee-table";
import axios from "axios";
import "./home-page.css";
import Pagination from "../../components/pagination/pagination";
import Search from "../../components/search/search";

function Home() {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [searchField, setSearchField] = useState({
    logId: "",
    applicationId: "",
    fromDate: "",
    toDate: "",
    applicationType: "",
    actionType: "",
  });
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(10);


  // fetching data from API
  useEffect(() => {
    const fetchEmployees = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f"
      );
      setEmployees(res.data.result.auditLog);
      setLoading(false);
    };

    fetchEmployees();
  }, []);

  // obtain input from user
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchField({ ...searchField, [name]: value });
  };

  const submitSearch = (e) => {
    e.preventDefault();
    let selectedTimes = [];
    if (searchField.fromDate && searchField.toDate) {
      let startDate = new Date(searchField.fromDate).getTime();
      let endDate = new Date(searchField.toDate).getTime();
      let newTimes = [];
      employees.forEach((employee) => {
        let newDate = new Date(employee.creationTimestamp).getTime();
        newTimes.push(newDate);
      });

      newTimes.forEach((time) => {
        if (startDate < time && endDate > time) {
          selectedTimes.push(time);
        }
      });
      console.log(selectedTimes);
    }

    const filteredEmployees = employees.filter(
      (employee) =>
        employee.logId.toString().includes(searchField.logId.toString()) &&
        employee.actionType.includes(searchField.actionType) &&
        (!searchField.applicationType
          ? 1
          : employee.applicationType && searchField.applicationType
          ? employee.applicationType.includes(searchField.applicationType)
          : "") &&
        (searchField.fromDate && searchField.toDate
          ? selectedTimes.includes(
              new Date(employee.creationTimestamp).getTime()
            )
          : 1) &&
        (!searchField.applicationId
          ? 1
          : employee.applicationId && searchField.applicationId
          ? employee.applicationId
              .toString()
              .includes(searchField.applicationId.toString())
          : "")
    );
    setFilteredEmployees(filteredEmployees);
  };

  //pagination

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = employees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  const currentFilteredEmployees = filteredEmployees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  

  return (
    <div className="home-div">
      <Search
        searchField={searchField}
        handleChange={handleChange}
        submitSearch={submitSearch}
      />

      {filteredEmployees.length ? (
        <EmployeeTable employees={currentFilteredEmployees} loading={loading} />
      ) : (
        <EmployeeTable employees={currentEmployees} loading={loading} />
      )}

      {filteredEmployees.length ? (
        <Pagination
          employeesPerPage={employeesPerPage}
          totalEmployees={filteredEmployees.length}
          paginate={paginate}
        />
      ) : (
        <Pagination
          employeesPerPage={employeesPerPage}
          totalEmployees={employees.length}
          paginate={paginate}
        />
      )}
    </div>
  );
}

export default Home;

// let duration = (new Date(valueCut2).getTime() - new Date(valueCut).getTime()) / 86400000;
