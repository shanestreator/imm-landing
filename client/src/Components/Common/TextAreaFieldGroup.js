import React from 'react'
import classnames from 'classnames'

const TextAreaFieldGroup = ({
  name,
  placeholder,
  value,
  error,
  info,
  onChange,
  className
}) => {
  return (
    <React.Fragment>
      <textarea
        style={{ height: '100px' }}
        className={classnames(className || 'form-control form-control-lg', {
          'is-invalid': error
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </React.Fragment>
  )
}

export default TextAreaFieldGroup
