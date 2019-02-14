import React from 'react'
import classnames from 'classnames'

// import { filterIcon } from '../../Utils/Utils'

const AdminTextFieldGroup = ({
  name,
  placeholder,
  icon,
  value,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  return (
    <div className="input-group py-1">
      <div className="input-group-prepend text-center" style={{ width: '20%' }}>
        <span className="input-group-text w-100 justify-content-center">
          <i className={icon} />
        </span>
      </div>
      <input
        type={type}
        className={classnames('form-control', {
          'is-invalid': error
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}

export default AdminTextFieldGroup
