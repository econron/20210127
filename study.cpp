#include <iostream>
#include <utility>
using namespace std;

int main(){
    // abs関数
    double a, b;
    cin >> a >> b;
    printf("%12.lf\n", abs(a-b));

    // 三角関数
    double pi = 3.1415;
    double x;
    cin >> x;
    sin(x / 180 * pi);
    cos(x / 180 * pi);
    tan(x / 180 * pi);

    // string
    string c, d;
    cin >> c >> d;
    string e = c + d;
    if(c.size() <= 10) cout << e << endl;
    else cout << e.substr(0,10) << endl;

    // min,max関数
    // min,maxに対して　数値の組み合わせを渡すか、配列を渡すか
    // *min_element(c+r, c+l) 渡した配列cの中でr番目からl番目の中の最小値を返す
    // * はイテレーターを回すため付ける必要があるらしい

    cout << max({102,132,784}) << endl;
    
    // {c[1],c[2], .... , c[N]}　の最小値を出すための手法
    int N, c[1000009], minx = 2147483647;
    cin >> N;
    for(int i = 1; i < N; i++) cin >> c[i];
    for(int i = 1; i < N; i++) minx = min(minx, c[i]);
    cout << minx << endl;

    cout << *min_element(c + 1, c + N + 1) << endl;

    // swap関数
    int f, g;
    cin >> f >> g;
    swap(f,g);
    cout << f << g << endl;

    int N, c[1000];
    cin >> N;

    // 最大公約数 _gcd
    int a2, b2;
    cin >> a2 >> b2;
    cout << _gcd(a2, b2) << endl;

    // clock関数
    int start = clock();
    for(int i = 0; i < 10000; ++i) cout << i << endl;
    clock() - start;

    // vector関数
    vector<int> vec; 
    vec.push_back(123);
    vec.push_back(234);
    vec.pop_back();

    // 応用例
    int N, A[10009];
    cin >> N;
    for(int i = 0; i <= N; i++) cin >> A[i];

    for(int i = 1; i <= N; i++){
        for(int j = 1; j <= N - i; j++){
            if(A[j] > A[j + 1]) swap(A[j], A[j+1]);
        }
    }

    return 0;
}