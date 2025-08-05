import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import '../pages/Layout.css'
import Sidebar from './sidebar/Sidebar';

const handleExport = () => {
  fetch('http://localhost:5000/export-xlsx', {
    method: 'GET'
  })
  .then(response => response.blob())
  .then(blob => {
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'pylogger_backup.xlsx');
    document.body.appendChild(link);
    link.click();
    link.remove();
  })
  .catch(err => console.error('Export failed:', err));
};


export default function Dashboard() {

  // const navigate = useNavigate();
  

  return (
    <div id='dashboard'>   
      <h1>Hello World!</h1>
      <button onClick={handleExport}>Export Logs to XLSX</button>
      <Link to={"/task-form"}>New Task</Link>
      <Link to={"/archive"}>New Product</Link>
      <Link to={"/new-agent-form"}>New Batch</Link>
    </div>
  );
}
