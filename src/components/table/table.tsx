import { useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { Dispatch } from "../../interfaces/dispatch.interface";
import { DISPATCH_STATUS, DISPATCH_STATUS_LABEL } from "../../utils/constant";
import "./table.css";

const statusCssFinder = (status: string) => {
  switch (status) {
    case DISPATCH_STATUS.CREATED:
      return "status-created";
    case DISPATCH_STATUS.IN_PROGRESS:
      return "status-inprogress";
    case DISPATCH_STATUS.CLOSED:
      return "status-closed";
  }
};

export default function Table() {
  const dispatchList = useLoaderData() as Dispatch[];
  let { size, currentTab } = useParams();
  const navigate = useNavigate();
  const [rowsPerPage, setRowsPerPage] = useState(size);
  const handleRowsPerPageChange = (event: any) => {
    setRowsPerPage(event.target.value);
    navigate(
      `/home/${currentTab || DISPATCH_STATUS.CREATED}/${event.target.value}`
    );
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Dispatch ID</th>
            <th>Status</th>
            <th>Created At</th>
            <th>Total Orders</th>
          </tr>
        </thead>
        <tbody>
          {dispatchList.map((dispatch) => (
            <tr key={dispatch.id}>
              <td>{dispatch.name}</td>
              <td className={statusCssFinder(dispatch.status)}>
                {DISPATCH_STATUS_LABEL[dispatch.status]}
              </td>
              <td>{dispatch.modifiedCreated?.toString() || ""}</td>
              <td>{dispatch.totalOrders || 10}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        Rows per page:{" "}
        <select value={rowsPerPage} onChange={handleRowsPerPageChange}>
          <option value={"3"}>3</option>
          <option value={"5"}>5</option>
          <option value={"10"}>10</option>
          <option value={"20"}>20</option>
        </select>
      </div>
    </div>
  );
}
