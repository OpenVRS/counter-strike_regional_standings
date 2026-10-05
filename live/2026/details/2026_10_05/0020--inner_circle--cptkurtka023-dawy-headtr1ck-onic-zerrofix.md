### Roster Details<br />
Team Name: Inner Circle<br />
Roster: cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX<br />
Global Rank: [20](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [15]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  1515.9<br />
<br />
Final Rank Value (1515.9) = Starting Rank Value (1534.6) + Head To Head Adjustments (-18.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.568[<sup>1</sup>](#table2)
- Bounty Collected: 0.550[<sup>2</sup>](#table1)
- Opponent Network: 0.308[<sup>2</sup>](#table1)
- LAN Wins: 0.844[<sup>2</sup>](#table1)

The average of these factors is 0.568<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1534.6
- 400 + ( ( 0.568 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 1534.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           39 |      637 | 2026-09-22 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |   -17.06 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           38 |      772 | 2026-09-18 | EYEBALLERS        | L   | 1.000      | -            | -                | -                | -         |   -23.48 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           37 |      788 | 2026-09-18 | INFINITE          | W   | 1.000      | 0.500        | 0.038 (0.019)    | 0.609 (0.305)    | 1 (1.000) |     5.48 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           36 |      792 | 2026-09-18 | 3DMAX             | W   | 1.000      | 0.500        | 0.330 (0.165)    | 0.492 (0.246)    | 1 (1.000) |    12.48 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           35 |      797 | 2026-09-18 | Liquid            | W   | 1.000      | 0.500        | 0.192 (0.096)    | 0.547 (0.274)    | 1 (1.000) |    15.89 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           34 |      806 | 2026-09-18 | BBL               | W   | 1.000      | 0.500        | 0.048 (0.024)    | 0.779 (0.389)    | 1 (1.000) |    10.10 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           33 |     1097 | 2026-09-11 | B8                | L   | 1.000      | -            | -                | -                | -         |   -14.10 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           32 |     1145 | 2026-09-10 | Ninjas in Pyjamas | W   | 1.000      | 0.143        | 0.238 (0.034)    | -                | -         |    15.12 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           31 |     1188 | 2026-09-09 | Nemiga            | L   | 1.000      | -            | -                | -                | -         |   -17.65 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           30 |     1634 | 2026-08-30 | FUT               | L   | 0.960      | -            | -                | -                | -         |    -5.31 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           29 |     1706 | 2026-08-29 | MOUZ              | L   | 0.952      | -            | -                | -                | -         |    -3.67 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           28 |     1803 | 2026-08-27 | Vitality          | W   | 0.939      | 1.000        | 1.000 (0.939)    | 0.358 (0.336)    | 1 (0.939) |    26.07 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           27 |     2274 | 2026-08-09 | HOTU              | L   | 0.820      | -            | -                | -                | -         |   -16.32 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           26 |     2289 | 2026-08-09 | Iberian Soul      | W   | 0.819      | 0.818        | 0.073 (0.049)    | 0.447 (0.300)    | 1 (0.819) |     4.44 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           25 |     2385 | 2026-08-07 | ASTRAL            | W   | 0.806      | 0.818        | -                | 0.474 (0.313)    | 1 (0.806) |     1.48 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           24 |     2407 | 2026-08-07 | NIO               | W   | 0.805      | -            | -                | -                | 1 (0.805) |     0.05 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           23 |     3132 | 2026-07-11 | Virtus.pro        | W   | 0.628      | 0.769        | -                | 0.616 (0.297)    | -         |     3.59 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           22 |     3149 | 2026-07-10 | magic             | W   | 0.620      | 0.769        | 0.288 (0.137)    | 0.378 (0.180)    | -         |     9.68 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           21 |     3175 | 2026-07-09 | GenOne            | W   | 0.614      | 0.769        | 0.055 (0.026)    | 0.936 (0.442)    | -         |     3.60 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           20 |     3337 | 2026-06-28 | Acend             | W   | 0.542      | -            | -                | -                | 1 (0.542) |     3.15 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           19 |     3368 | 2026-06-27 | DENDELE           | W   | 0.534      | 0.548        | 0.120 (0.035)    | -                | 1 (0.534) |     5.08 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           18 |     3387 | 2026-06-26 | Walczaki          | W   | 0.527      | -            | -                | -                | -         |     1.57 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           17 |     3396 | 2026-06-25 | Sashi             | W   | 0.522      | -            | -                | -                | -         |     2.43 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           16 |     3405 | 2026-06-25 | 9INE              | W   | 0.520      | -            | -                | -                | -         |     1.65 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           15 |     3426 | 2026-06-24 | DENDELE           | L   | 0.514      | -            | -                | -                | -         |   -11.56 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           14 |     3446 | 2026-06-23 | Nordic Partners   | W   | 0.505      | -            | -                | -                | -         |     0.87 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           13 |     3472 | 2026-06-20 | BBL               | L   | 0.486      | -            | -                | -                | -         |    -9.47 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           12 |     3499 | 2026-06-18 | Spirit Academy    | W   | 0.474      | -            | -                | -                | -         |     0.56 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           11 |     4205 | 2026-05-24 | FOKUS             | L   | 0.306      | -            | -                | -                | -         |    -6.66 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           10 |     4224 | 2026-05-23 | Acend             | W   | 0.302      | -            | -                | -                | -         |     1.70 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|            9 |     4237 | 2026-05-23 | DENDELE           | W   | 0.301      | -            | -                | -                | -         |     2.44 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|            8 |     4278 | 2026-05-22 | Gaimin Gladiators | W   | 0.295      | -            | -                | -                | -         |     0.03 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|            7 |     4285 | 2026-05-22 | Wildcard          | L   | 0.295      | -            | -                | -                | -         |    -7.96 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|            6 |     4308 | 2026-05-22 | OG                | W   | 0.292      | -            | -                | -                | -         |     0.37 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|            5 |     4343 | 2026-05-21 | INFINITE          | L   | 0.286      | -            | -                | -                | -         |    -6.38 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|            4 |     4346 | 2026-05-21 | KOLESIE           | W   | 0.286      | -            | -                | -                | -         |     0.18 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|            3 |     4355 | 2026-05-21 | Acend             | L   | 0.285      | -            | -                | -                | -         |    -7.57 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|            2 |     4362 | 2026-05-21 | HAVU              | W   | 0.285      | -            | -                | -                | -         |     0.41 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|            1 |     4370 | 2026-05-21 | CHAOS             | W   | 0.284      | -            | -                | -                | -         |     0.01 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($82,903.67)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.17) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-09-23 |      1.000 | $10,000.00     | $10,000.00      |
| 2026-09-06 |      1.000 | $32,500.00     | $32,500.00      |
| 2026-08-09 |      0.821 | $7,750.00      | $6,361.35       |
| 2026-06-28 |      0.542 | $60,000.00     | $32,504.62      |
| 2026-05-24 |      0.308 | $5,000.00      | $1,537.70       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
