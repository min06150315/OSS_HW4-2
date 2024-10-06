import axios from "axios";
import React, { useEffect, useState, useCallback } from "react"; // useCallback 추가
import { useParams } from "react-router-dom";
import "./User.css";

const User = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  const getUserApi = "https://66ff38172b9aac9c997e8ee3.mockapi.io/api/users";

  const getUser = useCallback(() => { // useCallback 사용
    axios
      .get(`${getUserApi}/${id}`) // 템플릿 리터럴 사용
      .then((item) => {
        setUser(item.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]); // id를 의존성 배열에 추가

  useEffect(() => {
    getUser(); // getUser 호출
  }, [getUser]); // getUser를 의존성 배열에 추가

  return (
    <div className="user mt-5">
      <table className="table table-bordered">
        <thead>
          {/* Edit */}
          <tr>
            <th>오픈소스 스튜디오</th>
            <th>웹 서비스 개발</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{user.name}</td>
          </tr>
          {/* Edit */}
          <tr>
            <td>RC</td>
            <td>{user.rc}</td>
          </tr>
          {/* Edit */}
          <tr>
            <td>Major</td>
            <td>{user.major}</td>
          </tr>
          {/* Edit */}
          <tr>
            <td>Year</td>
            <td>{user.year}</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>{user.phone}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default User; // 변경된 이름으로 export
