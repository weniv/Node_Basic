define(['jquery', 'node'], function($, N) {
	console.log($);
	console.log(N);

	// 이제 이 부분은 다른 곳에서 사용할 수 있습니다.
	return {
    a: $,
	b: N
  }
})