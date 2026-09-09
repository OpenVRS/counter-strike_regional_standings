### Roster Details<br />
Team Name: LFO 8<br />
Roster: c4put, JiNxZiE, Myst, Supers, Zoot<br />
Global Rank: [312](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_09_07.md)<br />
Regional Rank: [35]( ../../standings_asia_2026_09_07.md)<br />
<br />
Final Rank Value:  571.9<br />
<br />
Final Rank Value (571.9) = Starting Rank Value (604.4) + Head To Head Adjustments (-32.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.253[<sup>1</sup>](#table2)
- Bounty Collected: 0.173[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.107<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 604.4
- 400 + ( ( 0.107 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 604.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      413 | 2026-08-28 | MARKandLARRY  | L   | 1.000      | -            | -                | -                | -         |   -14.67 | c4put, junn, Mingovi, Supers, Zoot    |
|           14 |      503 | 2026-08-26 | Ground Zero   | L   | 1.000      | -            | -                | -                | -         |    -4.15 | c4put, junn, Mingovi, Supers, Zoot    |
|           13 |     1666 | 2026-07-17 | Arcade        | L   | 0.844      | -            | -                | -                | -         |   -11.41 | c4put, JiNxZiE, Mingovi, Supers, Zoot |
|           12 |     1670 | 2026-07-17 | FlyQuest      | L   | 0.843      | -            | -                | -                | -         |    -1.31 | c4put, JiNxZiE, Mingovi, Supers, Zoot |
|           11 |     2166 | 2026-06-17 | Rooster       | L   | 0.644      | -            | -                | -                | -         |    -6.29 | c4put, JiNxZiE, Myst, Supers, Zoot    |
|           10 |     2175 | 2026-06-16 | MARKandLARRY  | W   | 0.638      | 0.306        | 0.000 (0.000)    | 0.105 (0.021)    | 0 (0.000) |    10.35 | c4put, JiNxZiE, Myst, Supers, Zoot    |
|            9 |     2191 | 2026-06-15 | Rooster       | L   | 0.631      | -            | -                | -                | -         |    -6.07 | c4put, JiNxZiE, Myst, Supers, Zoot    |
|            8 |     2300 | 2026-06-12 | Ding Cuts     | W   | 0.611      | 0.306        | 0.000 (0.000)    | 0.052 (0.010)    | 0 (0.000) |     9.84 | c4put, JiNxZiE, Myst, Supers, Zoot    |
|            7 |     2326 | 2026-06-11 | Masked Regime | W   | 0.604      | 0.306        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.78 | c4put, JiNxZiE, Myst, Supers, Zoot    |
|            6 |     2341 | 2026-06-10 | Ding Cuts     | L   | 0.597      | -            | -                | -                | -         |    -9.17 | c4put, JiNxZiE, Myst, Supers, Zoot    |
|            5 |     4099 | 2026-04-17 | Abyssal       | L   | 0.243      | -            | -                | -                | -         |    -3.06 | c4put, JiNxZiE, Myst, Supers, Zoot    |
|            4 |     4103 | 2026-04-17 | Ding Cuts     | L   | 0.242      | -            | -                | -                | -         |    -3.81 | c4put, JiNxZiE, Myst, Supers, Zoot    |
|            3 |     4224 | 2026-04-11 | Arcade        | W   | 0.198      | 0.305        | 0.000 (0.000)    | 0.175 (0.011)    | 0 (0.000) |     3.53 | c4put, Mingovi, Myst, Supers, Zoot    |
|            2 |     4230 | 2026-04-10 | MGLBROS       | W   | 0.196      | 0.305        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.50 | c4put, Mingovi, Myst, Supers, Zoot    |
|            1 |     4231 | 2026-04-10 | Abyssal       | L   | 0.196      | -            | -                | -                | -         |    -2.50 | c4put, Mingovi, Myst, Supers, Zoot    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($553.08)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-18 |      0.651 | $714.00        | $464.75         |
| 2026-04-19 |      0.251 | $352.00        | $88.33          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
