import http from 'k6/http';
import { check } from 'k6';

export default function () {
    const url = 'https://reqres.in/api/users/2';
    const payload = JSON.stringify({
        name: 'morpheus',
        job: 'president',
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const res = http.put(url, payload, params);

    check(res, {
        'response code is 200': (r) => r.status === 200,
    });
}
