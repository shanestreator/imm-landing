import React from 'react'
import classnames from 'classnames'

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled,
  className
}) => {
  return !className ? (
    <div className="form-group">
      {label && <label htmlFor={label}>{label}</label>}
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
  ) : (
    <React.Fragment>
      {label && (
        <label htmlFor={label} className="mt-2 mb-0">
          {label}
        </label>
      )}
      <input
        type={type}
        className={classnames(className, {
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
    </React.Fragment>
  )
}

export default TextFieldGroup
