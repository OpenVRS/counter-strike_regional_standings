### Roster Details<br />
Team Name: 9INE<br />
Roster: bnox, cej0t, kraghen, raalz, shield<br />
Global Rank: [258](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [169]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  666.1<br />
<br />
Final Rank Value (666.1) = Starting Rank Value (656.8) + Head To Head Adjustments (9.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.232[<sup>1</sup>](#table2)
- Bounty Collected: 0.245[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.041[<sup>2</sup>](#table1)

The average of these factors is 0.133<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 656.8
- 400 + ( ( 0.133 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 656.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |     5271 | 2026-02-28 | BetBoom     | L   | 0.158      | -            | -                | -                | -         |    -0.01 | bnox, cej0t, kraghen, raalz, shield |
|           12 |     5298 | 2026-02-27 | EYEBALLERS  | L   | 0.154      | -            | -                | -                | -         |    -0.09 | bnox, cej0t, kraghen, raalz, shield |
|           11 |     5386 | 2026-02-26 | Echo        | W   | 0.145      | 0.769        | 0.053 (0.006)    | 0.746 (0.083)    | 0 (0.000) |     4.43 | bnox, cej0t, kraghen, raalz, shield |
|           10 |     5548 | 2026-02-22 | illwill     | L   | 0.121      | -            | -                | -                | -         |    -1.34 | bnox, cej0t, kraghen, raalz, shield |
|            9 |     5559 | 2026-02-22 | Sashi       | W   | 0.120      | 0.342        | 0.031 (0.001)    | 0.586 (0.024)    | 1 (0.120) |     3.53 | bnox, cej0t, kraghen, raalz, shield |
|            8 |     5577 | 2026-02-22 | BC.Game     | L   | 0.120      | -            | -                | -                | -         |    -1.26 | bnox, cej0t, kraghen, raalz, shield |
|            7 |     5583 | 2026-02-22 | MASONIC     | L   | 0.119      | -            | -                | -                | -         |    -0.34 | bnox, cej0t, kraghen, raalz, shield |
|            6 |     5595 | 2026-02-22 | BOSS        | W   | 0.119      | 0.342        | 0.001 (0.000)    | 0.183 (0.007)    | 1 (0.119) |     2.34 | bnox, cej0t, kraghen, raalz, shield |
|            5 |     6006 | 2026-02-14 | HOTU        | L   | 0.067      | -            | -                | -                | -         |    -0.05 | bnox, cej0t, kraghen, raalz, shield |
|            4 |     6060 | 2026-02-13 | JiJieHao    | W   | 0.060      | 0.384        | 0.048 (0.001)    | 0.426 (0.010)    | 1 (0.060) |     1.81 | bnox, cej0t, kraghen, raalz, shield |
|            3 |     6107 | 2026-02-12 | PCIFIC      | W   | 0.054      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.054) |     0.33 | bnox, cej0t, kraghen, raalz, shield |
|            2 |     6331 | 2026-02-05 | ex-RUBY     | L   | 0.006      | -            | -                | -                | -         |    -0.07 | bnox, cej0t, kraghen, raalz, shield |
|            1 |     6349 | 2026-02-04 | los kogutos | W   | 0.001      | 0.435        | 0.014 (0.000)    | 0.673 (0.000)    | 0 (0.000) |     0.02 | bnox, cej0t, kraghen, raalz, shield |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($240.38)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-14 |      0.068 | $3,125.00      | $211.46         |
| 2026-02-06 |      0.014 | $2,000.00      | $28.92          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
