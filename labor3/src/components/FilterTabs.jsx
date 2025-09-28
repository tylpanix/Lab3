const FilterTabs = ({ currentFilter, onFilterChange }) => {
  const tabs = [
    { key: 'all', label: 'All' },
    { key: 'active', label: 'To-do' },
    { key: 'completed', label: 'Completed' }
  ]

  return (
    <div className="filter-tabs">
      <h3>Add a new to-do</h3>
      <div className="tabs">
        {tabs.map(tab => (
          <button
            key={tab.key}
            className={`tab ${currentFilter === tab.key ? 'active' : ''}`}
            onClick={() => onFilterChange(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterTabs