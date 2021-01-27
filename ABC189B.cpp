// Σ V * p/100　>= X
// 上記の式を満たした時点で、stdinのセット回数を出力する

#include <iostream>
using namespace std;

int main(){
    int n,x;
    cin >> n >> x;

    int ans = -1;
    double sum = 0;

    for(int i = 1; i < n; i++){
        int v,p;
        cin >> v >> p;
        sum += v*p;
        if(sum > x * 100 && ans = -1){
            ans = i;
        }
    }

    cout << ans << endl;
}


