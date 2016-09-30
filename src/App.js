import React, { Component } from 'react';

const style1 = {
  margin: 0,
  padding: 0,
  fontFamily: 'Helvetica'
};

const style2 = {
  backgroundColor: '#FFFFFF',
  padding: 0,
  fontFamily: 'Helvetica',
  marginTop: 0,
  marginBottom: 0,
  marginRight: 'auto',
  marginLeft: 'auto',
  display: 'block',
  maxWidth: 600,
  clear: 'both'
};

const style3 = {
  fontFamily: 'Helvetica',
  marginTop: 0,
  marginBottom: 0,
  marginRight: 'auto',
  marginLeft: 'auto',
  padding: 15,
  maxWidth: 600,
  display: 'block'
};

const style4 = {
  margin: 0,
  padding: 0,
  fontFamily: 'Helvetica',
  marginBottom: 10,
  fontWeight: 'normal',
  fontSize: 14,
  lineHeight: 1.6
};

const style5 = {
  margin: 0,
  padding: 0,
  fontFamily: 'Helvetica',
  verticalAlign: 'top',
  paddingRigh: 10
};

const style6 = {
  margin: 0,
  padding: 0,
  fontFamily: 'Helvetica',
  maxWidth: '100%',
  borderRadius: '50%'
};

const style7 = {
  margin: 0,
  padding: 0,
  fontFamily: 'Helvetica',
  lineHeight: 1.1,
  marginBottom: 15,
  color: '#000',
  fontWeight: 500,
  fontSize: 23
};

const style8 = {
  margin: 0,
  padding: 0,
  fontFamily: 'Helvetica',
  fontSize: '60%',
  color: '#6f6f6f',
  lineHeight: 0,
  textTransform: 'none'
};

const style9 = {
  margin: 0,
  fontFamily: 'Helvetica',
  borderRadius: 6,
  color: '#FFF',
  textDecoration: 'none',
  backgroundColor: '#7dc855',
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 16,
  paddingRight: 16,
  marginRight: 10,
  textAlign: 'center',
  cursor: 'pointer',
  display: 'inline-block',
  fontWeight: 'bold'
};

const style10 = {
  margin: 0,
  padding: 0,
  fontFamily: 'Helvetica',
  clear: 'both'
};

const App = (props) => {
  return (
    <div>
    <table style={style1} width="100%">
      <tr style={style1}>
        <td style={style1}></td>
        <td style={style2}>

          <div style={style3}>
            <table style={style1} width="100%">
              <tr style={style1}>
                <td style={style1}>
                  <p style={style4}>Hi {props.contactName},</p>
                  <p style={style4}>We've got {props.students.length} fullstack developers who would love to join the dev team at {props.employerName}. Their profiles are below.</p>
                  <p style={style4}>We can set up "speed dating" interviews for you to meet with each of them for 10 minutes during hiring day. Will you be able to join us?</p>
                  <p style={style4}>Looking forward to seeing you on campus!</p>
                  <p style={style4}>Ceren</p>
                </td>
              </tr>
            </table>
          </div>

          {props.students.map((student, i) => (
            <div key={i} style={style3}>

              <table style={style1} width="100%">
                <tr style={style1}>
                  <td width="20%" style={style5}><img src={student.imageUrl} style={style6} /></td>
                  <td style={style1}>
                    <h4 style={style7}>{student.name} <small style={style8}>{student.title}</small></h4>
                    <p style={style4}>{student.coverLetter}</p>
                    <a className="btn" style={style9} href="{student.profileLink}">See my profile</a>
                  </td>
                </tr>
              </table>

            </div>
          ))}

        </td>
        <td style={style1}></td>
      </tr>
    </table>

    <table style={style10} width="100%">
      <tr style={style1}>
        <td style={style1}></td>
        <td style={style2}>

            <div style={style3}>
              <table style={style1} width="100%">
                <tr style={style1}>
                  <td style={Object.assign({}, style1, {textAlign: 'center'})}>
                    <p style={style4}>
                      Fullstack Academy | 5 Hanover Square, Floor 25 | New York, NY 10004
                    </p>
                  </td>
                </tr>
              </table>
            </div>

        </td>
        <td style={style1}></td>
      </tr>
    </table>
    </div>
  );
}

export default App;
