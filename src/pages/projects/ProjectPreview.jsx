import { FiActivity, FiBarChart2, FiCheckCircle, FiFileText } from 'react-icons/fi';

const previews = {
  triage: { label: 'Health declarations', Icon: FiActivity, rows: ['Submit declaration', 'Review response', 'Entry notification'], DetailIcon: FiCheckCircle },
  tickets: { label: 'Ticket monitoring', Icon: FiBarChart2, rows: ['Ticket distribution', 'Track allocations', 'Remittance summary'], DetailIcon: FiFileText },
};

export default function ProjectPreview({ theme }) {
  const { label, Icon, rows, DetailIcon } = previews[theme];

  return (
    <div className={`project-preview project-preview-${theme}`} aria-hidden="true">
      <div className="preview-window">
        <div className="preview-top">
          <span><i /><i /><i /></span>
          <small>Workflow illustration</small>
        </div>
        <div className="preview-body">
          <div className="preview-sidebar"><Icon /><span /><span /><span /></div>
          <div className="preview-content">
            <strong>{label}</strong>
            {rows.map((row) => (
              <div className="preview-row" key={row}><DetailIcon />{row}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
