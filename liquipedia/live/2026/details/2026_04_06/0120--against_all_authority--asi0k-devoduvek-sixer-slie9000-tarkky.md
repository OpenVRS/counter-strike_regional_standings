### Roster Details<br />
Team Name: Against All authority<br />
Roster: AsI0K, devoduvek, SIXER, SLIE9000, Tarkky<br />
Global Rank: [120](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [83]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  989.6<br />
<br />
Final Rank Value (989.6) = Starting Rank Value (948.8) + Head To Head Adjustments (40.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.345[<sup>1</sup>](#table2)
- Bounty Collected: 0.294[<sup>2</sup>](#table1)
- Opponent Network: 0.083[<sup>2</sup>](#table1)
- LAN Wins: 0.400[<sup>2</sup>](#table1)

The average of these factors is 0.281<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 948.8
- 400 + ( ( 0.281 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 948.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.214
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |        1 | 2026-04-05 | Julie&cie        | W   | 1.000      | 0.362        | 0.009 (0.003)    | 0.092 (0.033)    | 1 (1.000) |     9.61 | AsI0K, drac, Saax, SLIE9000, Tarkky       |
|           12 |       24 | 2026-04-05 | Julie&cie        | W   | 1.000      | 0.362        | 0.009 (0.003)    | 0.092 (0.033)    | 1 (1.000) |     9.77 | AsI0K, drac, Saax, SLIE9000, Tarkky       |
|           11 |       43 | 2026-04-04 | Subtop De France | W   | 1.000      | 0.362        | 0.006 (0.002)    | 0.092 (0.033)    | 1 (1.000) |     9.22 | AsI0K, drac, Saax, SLIE9000, Tarkky       |
|           10 |       52 | 2026-04-04 | Prodigy (Agency) | W   | 1.000      | 0.362        | 0.004 (0.001)    | 0.061 (0.022)    | 1 (1.000) |     7.08 | AsI0K, drac, Saax, SLIE9000, Tarkky       |
|            9 |      748 | 2026-03-22 | Sangal Esports   | L   | 1.000      | -            | -                | -                | -         |   -10.70 | AsI0K, devoduvek, SIXER, SLIE9000, Tarkky |
|            8 |      797 | 2026-03-21 | Ursa             | L   | 1.000      | -            | -                | -                | -         |   -11.27 | AsI0K, devoduvek, SIXER, SLIE9000, Tarkky |
|            7 |      893 | 2026-03-19 | Ex-MINLATE       | W   | 1.000      | 0.384        | 0.001 (0.000)    | 0.445 (0.171)    | 0 (0.000) |    17.83 | AsI0K, devoduvek, SIXER, SLIE9000, Tarkky |
|            6 |      986 | 2026-03-17 | SPARTA Esports   | W   | 1.000      | 0.384        | 0.063 (0.024)    | 0.732 (0.281)    | 0 (0.000) |    27.57 | AsI0K, devoduvek, SIXER, SLIE9000, Tarkky |
|            5 |     1033 | 2026-03-16 | Lilmix           | W   | 1.000      | 0.384        | 0.008 (0.003)    | 0.259 (0.100)    | 0 (0.000) |    13.69 | AsI0K, devoduvek, SIXER, SLIE9000, Tarkky |
|            4 |     1144 | 2026-03-14 | CSDIILIT         | L   | 1.000      | -            | -                | -                | -         |   -21.40 | AsI0K, devoduvek, SIXER, SLIE9000, Tarkky |
|            3 |     1177 | 2026-03-13 | FUZOS            | W   | 1.000      | 0.384        | 0.005 (0.002)    | 0.414 (0.159)    | 0 (0.000) |    13.05 | AsI0K, devoduvek, SIXER, SLIE9000, Tarkky |
|            2 |     1240 | 2026-03-12 | MANA eSports     | L   | 1.000      | -            | -                | -                | -         |   -15.03 | AsI0K, devoduvek, SIXER, SLIE9000, Tarkky |
|            1 |     2312 | 2026-02-19 | Oxuji Esports    | L   | 0.891      | -            | -                | -                | -         |    -8.59 | AsI0K, devoduvek, SIXER, SLIE9000, Tarkky |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,760.00)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-05 |      1.000 | $5,760.00      | $5,760.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
