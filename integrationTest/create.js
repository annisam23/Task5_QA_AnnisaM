import http from 'k6/http';
import { check } from 'k6';

export default function () {
    const url = 'https://reqres.in/api/users';
    const payload = JSON.stringify({
        name: 'morpheus',
        job: 'leader',
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const res = http.post(url, payload, params);

    check(res, {
        'response code is 201': (r) => r.status === 201,
    });
}
